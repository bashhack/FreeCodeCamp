# Bonfire: Friendly Date Ranges

Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD

```
function friendly(str) {
  return str;
}

friendly(['2015-07-01', '2015-07-04']);
```