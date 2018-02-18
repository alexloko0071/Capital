<?php
echo"KapitaL";
	
function capitaliz($x1, $x2, $x3, $x4, $c1, $c2, $c3, $c4, $mu)
	{
		$res =$mu*($c1*$x1+$c2*$x2+$c3*$x3+$c4*$x4);
		echo "$res";
		return $res;
		
	}

$a=10;
capitaliz($a,$a,$a,$a,$a,$a,$a,$a,$a);
?>
