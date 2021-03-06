options( digits = 16 )
library( jsonlite )
library( bda )

mu = 0.5
b = 1.5
x = 0:24
y = plap( x, mu, 1/b )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	b = b,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
