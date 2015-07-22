options( digits = 16 )
library( jsonlite )
library( bda )

mu = 10
b = 13
x = seq( -300, 300, 0.5 )
y = plap( x, mu, 1/b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
