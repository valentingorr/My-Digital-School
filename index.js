const xlsx = require("xlsx");
const puppeteer = require("puppeteer");
const pLimit = require("p-limit");
const limit = pLimit(1);

const workbook = xlsx.readFile("words.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);

(async () => {

	const scores = {
		interest: [
			[[-Infinity, 0], 0],
			[[10, 100], 5],
			[[100, 1000], 10],
			[[1000, 10 * 1000], 15],
			[[10 * 1000, 100 * 1000], 20],
			[[100 * 1000, Infinity], 25]
		],
		feasibility: [
			[[1000 * 1000, Infinity], 0],
			[[500 * 1000, 1000 * 1000], 5],
			[[100 * 1000, 500 * 1000], 10],
			[[10 * 1000, 100 * 1000], 15],
			[[-Infinity, 10 * 1000], 20]
		]
	};

	const data = [
		[
			"Mot-clé/requête",
			"Résultats du générateur de mots-clés de Google",
			"Note d'intéret",
			"Résultats du moteur de recherche Google (allintitle:)",
			"Note de faisabilité"
		]
	];

	await new Promise(async (resolve, reject) => {
		try {
			const browser = await puppeteer.launch({ headless: false });
			await Promise.all(
				jsonData
					.map((line, i) => {
						return limit(() => {
							return new Promise(async (resolve, reject) => {
								try {
									const page = await browser.newPage();
									await page.goto(`https://www.google.com/search?q=allintitle%3A${line?.Keyword}`);
									await page.waitForSelector("#result-stats");
									const results = await page.$eval("#result-stats", node => {
										node.removeChild(node.lastElementChild);
										return parseInt(node.innerText.replace(/[\D]/g, ""));
									});
									await page.close();

									let interest = scores.interest.find(score => {
										if(
											line["Vol."] > score[0][0] &&
											line["Vol."] < score[0][1]
										) return true;
										return false;
									});

									if(interest) interest = interest[1];

									let feasibility = scores.feasibility.find(score => {
										if(
											results > score[0][0] &&
											results < score[0][1]
										) return true;
										return false;
									});

									if(feasibility) feasibility = feasibility[1];

									data.push([
										line["Keyword"],
										line["Vol."],
										interest,
										results,
										feasibility
									]);

									return resolve();

								} catch(err) {
									reject(err);
								}
							})
						});
					})
			);
			await browser.close();
			resolve();
		} catch(err) {
			resolve();
		}
	});

	const newWorkbook = xlsx.utils.book_new();
	const worksheet = xlsx.utils.aoa_to_sheet(data);
	xlsx.utils.book_append_sheet(newWorkbook, worksheet, "Feuille1");
	xlsx.writeFile(newWorkbook, "output.xlsx");

})();