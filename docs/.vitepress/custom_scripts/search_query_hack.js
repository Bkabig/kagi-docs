=> {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    }

    function loadQuery(q) {
      document.querySelector("#docsearch > button").click();
      waitForElm(".DocSearch-Input").then((elem) => {
        elem.focus();
        elem.value = q;
        elem.dispatchEvent(new Event("input"));
      });
    }

    if (searchString) {
      setTimeout(() => {
        loadQuery(searchString);
      }, 350);
    }
  }
}
