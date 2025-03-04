# Snaps

<br>

<video src="./media/snaps.mp4" width="720" type="video/mp4" autoplay muted loop playsinline disablepictureinpicture />

**Snaps** allows you to easily limit search results to a specific website by using the `@` symbol followed by a short code for the site and then your search query. 

## Example

Typing `@r headphones` will search for "headphones" but limit the results to reddit.com (`r` is the short code for Reddit). This allows you to quickly find relevant content on a specific site using Kagi's powerful index. It is effectively the same as doing `headphones site:old.reddit.com`.

Its relative, [Bangs](./bangs.md) feature, invoked by using "!r headphones", would redirect the user to reddit's internal search.

## How to Use Snaps

1. Type the `@` symbol in the search bar.
2. Enter the short code for the site you want to search.
	- If you don’t know the short code, type a few letters of the site’s name and autosuggest options will appear.
	- Navigate these options using your arrow keys or mouse.
3. Enter your search query.
4. Press enter or click the search button.

## Contributing to Snaps

The short codes used in Snaps are the same as those used in our [Bangs](./bangs.md) feature. The list of bangs is [open source](https://github.com/kagisearch/bangs), so anyone can contribute to it. If you don't see a short code for a site you want to search, feel free to submit a pull request to add it to the list.
