makejson
=========

Make JSON from the command line

Installation
------------

    [sudo] npm install -g makejson

Usage
-----

    $ makejson string foo bar baz

``` json
"foo bar baz"
```

    $ makejson array foo bar baz

``` json
[
  "foo",
  "bar",
  "baz"
]
```

    $ makejson object foo=foo bar=bar baz=baz

``` json
{
  "foo": "foo",
  "bar": "bar",
  "baz": "baz"
}
```

    $ makejson object foo=false bar=true baz=null string="something here" a.b.c.d=100 a.b.c.e=something

``` json
{
  "foo": false,
  "bar": true,
  "baz": null,
  "string": "something here",
  "a": {
    "b": {
      "c": {
        "d": 100,
        "e": "something"
      }
    }
  }
}
```

License
-------

MIT
