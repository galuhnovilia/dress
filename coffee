#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/node_modules/coffeescript/bin/coffee" "$@"
  ret=$?
else 
  node  "$basedir/node_modules/coffeescript/bin/coffee" "$@"
  ret=$?
fi
exit $ret
