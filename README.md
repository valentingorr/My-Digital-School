# PHP Cheat-Sheets

## Variables
```php
// string variable
$string = "Hello World";
// int variable
$int = 3;
// float variable
$float = 4.5;
// array variable
$array = array(0, 1, 2);
// dictionary variable
$dictionary = array(
	"username" => "valentin",
	"age" => 18,
	"skills" => array(
		"dev full stack",
		"designer"
	)
);
```

## Operators
```php
$x = 24;  
$y = 3;

#Arthimetic Operators

#The PHP arithmetic operators are used with numeric values to perform common arithmetical operations.

echo $x + $y . " this is addition <br>";
echo $x - $y . " this is subtraction <br>";
echo $x * $y . " this is multiplication <br>";
echo $x / $y . " this is division <br>";
echo $x % $y . " this is modulus <br>";
echo $x ** $y . " this is exponentation <br>";

#Assignment Operators

echo $x = $y . " this is the same as x = y <br>";
echo $x += $y . " this is the same as x = x + y <br>";
echo $x -= $y . " this is the same as x = x - y <br>";
echo $x *= $y . " this is the same as x = x * y <br>";
echo $x /= $y . " this is the same as x = x / y <br>";
echo $x %= $y . " this is the same as x = x % y <br>";

#Comparison Operators

echo $x == $y . " this returns true if x is equal to y <br>";
echo $x === $y . " this returns true if x is equal to y and they are of the same type <br>";
echo $x != $y . " this returns true if x is not equal to y <br>";
echo $x <> $y . " this also returns true if x is not equal to y <br>";
echo $x !== echo $x = $y . " this returns true if x is not equal to y, or they are not of the same type <br>";
echo $x > $y . " this returns true if x is greater than y <br>";
echo $x < $y . " this returns true if x is less than y <br>";
echo $x >= $y . " this returns true if x is greater than or equal to y <br>";
echo $x <= $y . " this returns true if x is less than or equal to y <br>";
echo $x <=> . " this returns an integer less than, equal to, or greater than zero, depending on if x is less than, equal to, or greater than y. Introduced in PHP 7. <br>";

#Increment/Decrement operators

echo ++$x . " this increments x by 1 and then returns x <br>";
echo $x++ . " this returns x and increments x by 1 <br>";
echo --$x . " this decrements x by 1 and then returns x <br>";
echo $x-- . " this returns x and decrements x by 1 <br>";

#Logical Operators

$a = $x >= $y
$b = $x <= $y

echo $a and $b . " this returns true if both, a and b are true <br>";
echo $a or $b . " this returns true if either of them (or both) are true <br>";
echo $a xor $b . " this returns true if either of them are true, but not both";
echo $a && $b .  " this returns true if both, a and b are true <br>";
echo $a || $b . " this returns true if either of them are true <br>";
echo !$b . " this returns true if b is not true <br>";

#String operators

$text1 = "Sharp";
$text2 = "Nails";

echo $text1 . $text2 . " this adds text1 before text2 <br>";
echo $text1 .= $text2 . " this appends text2 to text1"

#Array operators

$polygons = array("pentagon","hexagon","heptagon")
$polygons1 = array("octagon","nonagon","decagon")

print_r($polygons+$polygons1); #This appends polygons1 to polygons

var_dump($polygons == $polygons1); #This returns true if polygons and polygons1 have the same key/value pairs in the same order and of the same types

var_dump($polygons != $polygons1); #This returns true if polygons is not equal to polygons1
var_dump($polygons <> $polygons1); #This returns true if polygons is not equal to polygons1

var_dump($polygons !== $polygons1); #This returns true if polygons is not identical to polygons1

#Conditional Assignment Operators

echo $status = (empty($user)) ? "anonymous" : "logged in";
echo(" when empty(user) is true, status is set to anonymous, when empty(user) is false, status is set to logged in<br>");

$user = "Rick Astley";
echo $status = (empty($user)) ? "anonymous" : "logged in";
echo "<br>"

echo $user = $_get["user"] ?? "anonymous";
echo(" the value of user is _get['user'] if _get['user'] exists, and is not NULL. If _get['user'] does not exist, or is NULL, the value of user is anonymous.<br>");
```

## Conditions
```php
$number = 3;
if($number < 1) {
	echo "le nombre est inférieur à 1.";
} elseif($number < 2) {
	echo "le nombre est inférieur à 2.";
} elseif($number < 3) {
	echo "le nombre est inférieur à 3.";
} else {
	echo "le nombre doit être vachement grand \!";
}
```

## Function
```php
function myFunction($param1, $param2) { // declaration de la fonction
	echo "param1 :"."\n";
	var_dump($param1);
	echo "param2 :"."\n";
	var_dump($param2);
}

myFunction("valentin", "dev"); // appel de la fonction
```

## Class
```php
class Fruit {
  public $name;
  public $color;
  function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  function get_name() {
    return $this->name;
  }
  function get_color() {
    return $this->color;
  }
}

$apple = new Fruit("Apple", "red");
echo $apple->get_name();
echo "\n";
echo $apple->get_color();
```