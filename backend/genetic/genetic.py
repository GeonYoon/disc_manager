#!/usr/bin/python

import re
import sys
x = sys.argv[1]

with open(x, 'r') as fi:
    data = fi.read()

rsid = re.compile("rs6651255")
if rsid.search(data) != None:
    print("Y")
else: print("N")
