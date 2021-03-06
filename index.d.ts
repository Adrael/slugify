declare namespace slugify {
	interface Options {
		/**
		@default '-'

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('BAR and baz');
		//=> 'bar-and-baz'

		slugify('BAR and baz', {separator: '_'});
		//=> 'bar_and_baz'
		```
		*/
		readonly separator?: string;

		/**
		Make the slug lowercase.

		@default true

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('Déjà Vu!');
		//=> 'deja-vu'

		slugify('Déjà Vu!', {lowercase: false});
		//=> 'Deja-Vu'
		```
		*/
		readonly lowercase?: boolean;

		/**
		Convert camelcase to separate words. Internally it does `fooBar` → `foo bar`.

		@default true

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('fooBar');
		//=> 'foo-bar'

		slugify('fooBar', {decamelize: false});
		//=> 'foobar'
		```
		*/
		readonly decamelize?: boolean;

		/**
		Specifying this only replaces the default if you set an item with the same key, like `&`.
		The replacements are run on the original string before any other transformations.

		Add a leading and trailing space to the replacement to have it separated by dashes.

		@default [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('Foo@unicorn', {
			customReplacements: [
				['@', 'at']
			]
		});
		//=> 'fooatunicorn'

		slugify('foo@unicorn', {
			customReplacements: [
				['@', ' at ']
			]
		});
		//=> 'foo-at-unicorn'
		```
		*/
		readonly customReplacements?: ReadonlyArray<[string, string]>;

		/**
		Use this option to load language-specific dictionary with predefined values. Can be overridden by `customReplacements`.

		Available language dictionaries are:
		- `arabic`
		- `german`
		- `pashto`
		- `persian`
		- `romanian`
		- `russian`
		- `swedish`
		- `turkish`
		- `urdu`
		- `vietnamese`
		- `special-chars` (for emojis and other complex chars such as `&`)

		@default []

		@example
		```
		import slugify = require('@sindresorhus/slugify');
		import swedish = require('@sindresorhus/slugify/dictionaries/swedish');

		slugify('öä', {
			dictionaries: [swedish]
		});
		//=> 'oa'
		```
		*/
		readonly dictionaries?: ReadonlyArray<ReadonlyArray<[string, string]>>;
	}
}

/**
Slugify a string.

@param string - String to slugify.

@example
```
import slugify = require('@sindresorhus/slugify');

slugify('I ♥ Dogs');
//=> 'i-love-dogs'

slugify('  Déjà Vu!  ');
//=> 'deja-vu'

slugify('fooBar 123 $#%');
//=> 'foo-bar-123'

slugify('I ♥ 🦄 & 🐶', {
	customReplacements: [
		['🐶', 'dog']
	]
});
//=> 'i-love-unicorn-and-dog'
```
*/
declare function slugify(
	string: string,
	options?: slugify.Options
): string;

export = slugify;
