codenotes
---
Codenotes is a project for storing notes in Markdown.

Summary
---

Codenotes:
- is a note editor
- uses md-like syntax
- is written in nodejs
- using simple, custom JS UI
- uses file system to store data
- runs on local machine
- runs on cloud server

How data works
--
Data is stored as files in directory structures that map
to tags. Data can be saved as a flat directory structure
plus metadata to preserve hierarchy. The amount of
structure and metadata to be stored, and where to
store it, remains to be determined. How to synchronize
data between co-located users (running on a server) and
between distributed users (running locally) remains
to be deterimned. A small set of utilities for checking
data integrity should also me considered. And a JSON
API would be nice.
