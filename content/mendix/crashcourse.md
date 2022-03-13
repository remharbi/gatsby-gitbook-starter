---
title: "Become a Rapid Developer"
metaTitle: "Become a Rapid Developer"
metaDescription: "Mendix Crash Course - Become a Rapid Developer"
---

# Module 7 Notes: 

- ### An object that exists in memory, but not in the database is called a <span style="color:#b573da">transient object</span>.
- ### transient objects are always included in a By Association Retrieve. If you don’t want transient objects to be included, use a From Database Retrieve.
- ### As microflows work sequentially from <span style="color:#b573da">left to right</span>, the Course object needs to be retrieved before the Change object activity. Otherwise, it won’t be in scope for the microflow expression in the Change object activity.


