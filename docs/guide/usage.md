# Usage

There are a few usage patterns you can employ with Greenlight, but first, lets look at some global environment variables that can be used to configure Greenlight:

## Environment Values

name                | type      | description                 | default value    
------------------- | --------- | --------------------------- | -----------------
`GREENLIGHT_SOURCE` | `Path`    | Source path to use          | `process.cwd()`  
`GREENLIGHT_TEMP`   | `Path`    | Temp path to use            | `/tmp/greenlight`
`GREENLIGHT_DEBUG`  | `Boolean` | enabled / disable debugging | `0`              

## Configuration

You can configure `Greenlight` using a local config file.

Config files are required to be saved in `UTF-8` encoding, other encodings are forbidden. Allowed formats are limited to [`JSON`][json] & [`YAML`][yaml].

```regex
^\.?greenlight\.(json|ya?ml|rc){1}$
```

### File Naming

Acceptable file name must match the following pattern:

```regex
^\.?greenlight\.(json|ya?ml|rc){1}$
```

##### All possible config file name combinations:

JSON               | YAML              
------------------ | ------------------
`greenlight.json`  | `greenlight.yml`  
`.greenlight.json` | `greenlight.yaml` 
`.greenlightrc`    | `.greenlight.yml` 
`greenlightrc`     | `.greenlight.yaml`

## Local Usage

Whether you're into _TDD_, _BDD_, _DDD_, or _(insert your "X-Driven-Development" methodology here)_.

You're certainly going to be running some testing locally at some point. If not, skip to the next section you rebel!

Once [installed](./installation.html) Greenlight CLI is quite easy to use, start by typing:

```bash
greenlight --help
```

You should see an output like this:

```plain
greenlight [source]

Positionals:
  source  source path to use                                    [string]

Options:
  --version       Show version number                          [boolean]
  --help          Show help                                    [boolean]
  --config, -c    path to greenlight config file  
  --reporter, -r  Use the specified output reporter             [string]
                             [choices: "text", "json", "html", "silent"] 
                                                       [default: "text"]

  --exit, -e      soft exit(0) even if issues were found       [boolean] 
                                                        [default: false]
```

option       | type      | required | default            | description                                          
------------ | --------- | -------- | ------------------ | -----------------------------------------------------
**source**   | `String`  | ✗        | `pwd`              | source path to use for analysis                      
**config**   | `Path`    | ✗        | `./greenlight.yml` | path to [configuration file](#configuration)         
**reporter** | `String`  | ✗        | `text`             | Full description of the plugin and it's functionality
**exit**     | `Integer` | ✗        | `1`                | exit code to use on failure                          
**version**  | `String`  | ✗        | `-`                | show version number                                  
**help**     | `String`  | ✗        | `-`                | show help                                            

`greenlight` command line accepts an optional argument: `source` that describes the source path use for analysis.

When no value is provided it will default [`GREENLIGHT_SOURCE`](#environment-values) or the current working directory.

## CI/CD Environment

Exactly the same setup as you would [locally](#local-usage), use `Greenlight` as part of your CI pipeline to halt deployment or indicate test failure when issues are found.

Pay special attention to the `--exit` option, which allows to define the [process exit code](http://tldp.org/LDP/abs/html/exitcodes.html) you want to use upon failures. _(defaults to `1`)_

## API Server

> _Coming Soon_

[json]: https://www.json.org/

[yaml]: http://www.yaml.org/
