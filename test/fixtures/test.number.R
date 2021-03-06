options( digits = 16 )
library( jsonlite )
library( bda )

mu = 0
b = 2
x = c( -5, -2.5, 0, 2.5, 5 )
y = plap( x, mu, 1/b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
