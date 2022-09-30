# -*- coding: utf-8 -*-

import os
from re import sub

def snake_case(s):
  return '_'.join(
    sub('([A-Z][a-z]+)', r' \1',
    sub('([A-Z]+)', r' \1',
    s.replace('-', ' '))).split()).lower()

def alphaNumeric(s):
    return sub(r'\W+', '', s)

def dropFileExtension(s):
    return os.path.splitext(s)[0]

def dropFirstLine(s):
    return "\n".join(s.split("\n")[1:])

lastDate = "2022-09-"
lastDay = 29
headerTemplate = """---
title: "{fileName} — Paper Summary"
slug: "/{slug}"
date: {date}
canonicalUrl: "https://elvischidera.com/{slug}/"
banner: ./assets/banner.jpeg
tags:
  - summary
  - paper
---

"""

for fileName in os.listdir('drafts'):
    formattedFileName = alphaNumeric(snake_case(dropFileExtension(fileName)))    
    date = lastDate + str(lastDay)

    slug = date + "-" + sub('_', '-', formattedFileName)
    lastDay = lastDay + 1
    print(slug)

    directory = "content/posts/" + slug
    assetsDirectory = directory + "/assets"
    if not os.path.exists(assetsDirectory):
        os.makedirs(assetsDirectory)
    
    header = headerTemplate.format(fileName = dropFileExtension(fileName), slug = slug, date = date)
    with open("drafts/" + fileName, "r") as inputFile:
        content = dropFirstLine(inputFile.read())
        contentWithHeader = header + content
        with open(directory + "/index.md", "w") as outputFile:
            outputFile.write(contentWithHeader)

