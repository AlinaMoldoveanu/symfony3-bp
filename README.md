symfony3-bp [![Build Status](https://travis-ci.org/irozgar/symfony3-bp.svg?branch=master)](https://travis-ci.org/irozgar/symfony3-bp)
===========

This is a starting template for Symfony 3 projects with some useful packages and
configuration

## Installation

To install clone the repository using git:
`git clone git@github.com:irozgar/symfony3-bp.git YOUR_PROJECT_FOLDER`

After that change the project name in composer.json to your project name

## Included packages
In addition to the symfony standard edition packages, some extra packages are included

### Common
| Library | Purpose |
|---------|---------|
|__[doctrine/doctrine-migrations-bundle](https://github.com/doctrine/DoctrineMigrationsBundle)__|Deploy new versions of the database schema|
 
### Development only
| Library | Purpose |
|---------|---------|
|__[phpunit/phpunit](https://github.com/sebastianbergmann/phpunit)__|Unit Testing|
|__[squizlabs/php_codesniffer](https://github.com/squizlabs/php_codesniffer)__|Search for coding style violations|
|__[phpmd/phpmd](https://github.com/phpmd/phpmd)__|Code quality checks|
|__[doctrine/doctrine-fixtures-bundle](https://github.com/doctrine/DoctrineFixturesBundle)__|Load fixtures into database|
|__[nelmio/alice](https://github.com/nelmio/alice)__|Generate fixtures data|

## Assets management
This template comes with a complete gulpfile that will allow you to compile sass,
minify css and js, version your assets.

Before compiling with gulp you will have to run `npm install` and `bower install`. 

### Compiling assets in production
To compile assets in production you should use the `--production` flag because it avoids sourcemaps
creation. And doesn't run watch
