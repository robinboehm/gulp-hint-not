#gulp-hint-not

It removes comments like these from your built source:

```
    /* jshint -W098 */

    /* global postal */
	postal.publish({
	    channel: "helpMeObiWan",
	    topic: "only.hope",
	    data: "Droids you're looking for..."
	});
```

##Why?
Depending on the project, I tend to keep my files as small as possible. One file may have a constructor function and its prototype, another might have a lookup object, etc. To keep IDE noise from becoming abhorrent, I like to keep unnecessary JSHint warnings from distracting me, since once the files are combined, JSHint's rules would be satisified. To do this, I'll add inline comment directives to tell JSHint to ignore something I know will be OK in the combined source. This plugin keeps those comments from making it into the final source, uglying things up.