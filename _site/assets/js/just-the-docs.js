

<!DOCTYPE html>

<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">

  

  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

  <link rel="stylesheet" href="/assets/css/just-the-docs-default.css">

  

  
    <script type="text/javascript" src="/assets/js/vendor/lunr.min.js"></script>
  
  <script type="text/javascript" src="/assets/js/just-the-docs.js"></script>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Object Oriented Programming - EE | Spring 2024 - CS152 - OOP</title>
<meta name="generator" content="Jekyll v3.9.2" />
<meta property="og:title" content="Object Oriented Programming - EE" />
<meta name="author" content="UBS" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="This introductory course is aimed at the students with little or no programming experience, and it introduces students to the basics of computers and programming. On one hand they will learn basic topics of computing and usage, while on the other hand they will be exposed to programming language(s). By the end of course the student should be capable of programming in at least one programming language." />
<meta property="og:description" content="This introductory course is aimed at the students with little or no programming experience, and it introduces students to the basics of computers and programming. On one hand they will learn basic topics of computing and usage, while on the other hand they will be exposed to programming language(s). By the end of course the student should be capable of programming in at least one programming language." />
<link rel="canonical" href="http://localhost:4000/assets/js/just-the-docs.js" />
<meta property="og:url" content="http://localhost:4000/assets/js/just-the-docs.js" />
<meta property="og:site_name" content="Object Oriented Programming - EE" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Object Oriented Programming - EE" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","author":{"@type":"Person","name":"UBS"},"description":"This introductory course is aimed at the students with little or no programming experience, and it introduces students to the basics of computers and programming. On one hand they will learn basic topics of computing and usage, while on the other hand they will be exposed to programming language(s). By the end of course the student should be capable of programming in at least one programming language.","headline":"Object Oriented Programming - EE","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"http://localhost:4000/assets/images/ubs-itu.png"},"name":"UBS"},"url":"http://localhost:4000/assets/js/just-the-docs.js"}</script>
<!-- End Jekyll SEO tag -->


  

</head>

<body>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="svg-link" viewBox="0 0 24 24">
      <title>Link</title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    </symbol>
    <symbol id="svg-search" viewBox="0 0 24 24">
      <title>Search</title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </symbol>
    <symbol id="svg-menu" viewBox="0 0 24 24">
      <title>Menu</title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </symbol>
    <symbol id="svg-arrow-right" viewBox="0 0 24 24">
      <title>Expand</title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </symbol>
    <symbol id="svg-doc" viewBox="0 0 24 24">
      <title>Document</title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>
      </svg>
    </symbol>
  </svg>

  <div class="side-bar">
    <div class="site-header">
      <a href="http://localhost:4000/" class="site-title lh-tight">
  <div class="site-logo"></div>

</a>
      <a href="#" id="menu-button" class="site-button">
        <svg viewBox="0 0 24 24" class="icon"><use xlink:href="#svg-menu"></use></svg>
      </a>
    </div>
    <nav role="navigation" aria-label="Main" id="site-nav" class="site-nav">
      
        <ul class="nav-list"><li class="nav-list-item"><a href="http://localhost:4000/announcements/" class="nav-list-link">Announcements</a></li><li class="nav-list-item"><a href="http://localhost:4000/calendar/" class="nav-list-link">Calendar</a></li><li class="nav-list-item"><a href="http://localhost:4000/schedule/" class="nav-list-link">Schedule</a></li><li class="nav-list-item"><a href="http://localhost:4000/attendance/" class="nav-list-link">Attendance</a></li><li class="nav-list-item"><a href="http://localhost:4000/StudentGroup/" class="nav-list-link">Student Group</a></li><li class="nav-list-item"><a href="http://localhost:4000/StudentProgressReport/" class="nav-list-link">Student Progress</a></li><li class="nav-list-item"><a href="#" class="nav-list-expander"><svg viewBox="0 0 24 24"><use xlink:href="#svg-arrow-right"></use></svg></a><a href="http://localhost:4000/pages/details/" class="nav-list-link">Details</a><ul class="nav-list "><li class="nav-list-item "><a href="http://localhost:4000/pages/details/parts/" class="nav-list-link">Parts</a></li><li class="nav-list-item "><a href="http://localhost:4000/pages/details/outlines/" class="nav-list-link">Outlines</a></li><li class="nav-list-item "><a href="http://localhost:4000/pages/details/key/" class="nav-list-link">Key & Policy</a></li><li class="nav-list-item "><a href="http://localhost:4000/pages/details/tools/" class="nav-list-link">Tools</a></li></ul></li><li class="nav-list-item"><a href="http://localhost:4000/famepage/" class="nav-list-link">Page of Fame</a></li><li class="nav-list-item"><a href="http://localhost:4000/staff/" class="nav-list-link">Staff</a></li></ul>

      
    </nav>
    <footer class="site-footer">
      This site uses <a href="https://github.com/pmarsceill/just-the-docs">Just the Docs</a>, a documentation theme for Jekyll.
    </footer>
  </div>
  <div class="main" id="top">
    <div id="main-header" class="main-header">
      
        <div class="search">
          <div class="search-input-wrap">
            <input type="text" id="search-input" class="search-input" tabindex="0" placeholder="Search Object Oriented Programming - EE" aria-label="Search Object Oriented Programming - EE" autocomplete="off">
            <label for="search-input" class="search-label"><svg viewBox="0 0 24 24" class="search-icon"><use xlink:href="#svg-search"></use></svg></label>
          </div>
          <div id="search-results" class="search-results"></div>
        </div>
      
      
      
        <nav aria-label="Auxiliary" class="aux-nav">
          <ul class="aux-nav-list">
            
              <li class="aux-nav-list-item">
                <a href="" class="site-button"
                  
                >
                  Nadir Abbas
                </a>
              </li>
            
          </ul>
        </nav>
      
    </div>
    <div id="main-content-wrap" class="main-content-wrap">
      
        
      
      <div id="main-content" class="main-content" role="main">
        
          (function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}
// Site search

function initSearch() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:4000/assets/js/search-data.json', true);

  request.onload = function(){
    if (request.status >= 200 && request.status < 400) {
      var docs = JSON.parse(request.responseText);
      
      lunr.tokenizer.separator = /[\s\-/]+/

      var index = lunr(function(){
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('relUrl');
        this.metadataWhitelist = ['position']

        for (var i in docs) {
          this.add({
            id: i,
            title: docs[i].title,
            content: docs[i].content,
            relUrl: docs[i].relUrl
          });
        }
      });

      searchLoaded(index, docs);
    } else {
      console.log('Error loading ajax request. Request status:' + request.status);
    }
  };

  request.onerror = function(){
    console.log('There was a connection error');
  };

  request.send();
}

function searchLoaded(index, docs) {
  var index = index;
  var docs = docs;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var mainHeader = document.getElementById('main-header');
  var currentInput;
  var currentSearchIndex = 0;

  function showSearch() {
    document.documentElement.classList.add('search-active');
  }

  function hideSearch() {
    document.documentElement.classList.remove('search-active');
  }

  function update() {
    currentSearchIndex++;

    var input = searchInput.value;
    if (input === '') {
      hideSearch();
    } else {
      showSearch();
      // scroll search input into view, workaround for iOS Safari
      window.scroll(0, -1);
      setTimeout(function(){ window.scroll(0, 0); }, 0);
    }
    if (input === currentInput) {
      return;
    }
    currentInput = input;
    searchResults.innerHTML = '';
    if (input === '') {
      return;
    }

    var results = index.query(function (query) {
      var tokens = lunr.tokenizer(input)
      query.term(tokens, {
        boost: 10
      });
      query.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING
      });
    });

    if ((results.length == 0) && (input.length > 2)) {
      var tokens = lunr.tokenizer(input).filter(function(token, i) {
        return token.str.length < 20;
      })
      if (tokens.length > 0) {
        results = index.query(function (query) {
          query.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    if (results.length == 0) {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.classList.add('search-no-result');
      noResultsDiv.innerText = 'No results found';
      searchResults.appendChild(noResultsDiv);

    } else {
      var resultsList = document.createElement('ul');
      resultsList.classList.add('search-results-list');
      searchResults.appendChild(resultsList);

      addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
    }

    function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
      if (searchIndex != currentSearchIndex) {
        return;
      }
      for (var i = start; i < (start + batchSize); i++) {
        if (i == results.length) {
          return;
        }
        addResult(resultsList, results[i]);
      }
      setTimeout(function() {
        addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
      }, batchMillis);
    }

    function addResult(resultsList, result) {
      var doc = docs[result.ref];

      var resultsListItem = document.createElement('li');
      resultsListItem.classList.add('search-results-list-item');
      resultsList.appendChild(resultsListItem);

      var resultLink = document.createElement('a');
      resultLink.classList.add('search-result');
      resultLink.setAttribute('href', doc.url);
      resultsListItem.appendChild(resultLink);

      var resultTitle = document.createElement('div');
      resultTitle.classList.add('search-result-title');
      resultLink.appendChild(resultTitle);

      var resultDoc = document.createElement('div');
      resultDoc.classList.add('search-result-doc');
      resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>';
      resultTitle.appendChild(resultDoc);

      var resultDocTitle = document.createElement('div');
      resultDocTitle.classList.add('search-result-doc-title');
      resultDocTitle.innerHTML = doc.doc;
      resultDoc.appendChild(resultDocTitle);
      var resultDocOrSection = resultDocTitle;

      if (doc.doc != doc.title) {
        resultDoc.classList.add('search-result-doc-parent');
        var resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = doc.title;
        resultTitle.appendChild(resultSection);
        resultDocOrSection = resultSection;
      }

      var metadata = result.matchData.metadata;
      var titlePositions = [];
      var contentPositions = [];
      for (var j in metadata) {
        var meta = metadata[j];
        if (meta.title) {
          var positions = meta.title.position;
          for (var k in positions) {
            titlePositions.push(positions[k]);
          }
        }
        if (meta.content) {
          var positions = meta.content.position;
          for (var k in positions) {
            var position = positions[k];
            var previewStart = position[0];
            var previewEnd = position[0] + position[1];
            var ellipsesBefore = true;
            var ellipsesAfter = true;
            for (var k = 0; k < 5; k++) {
              var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
              var nextDot = doc.content.lastIndexOf('. ', previewStart - 2);
              if ((nextDot >= 0) && (nextDot > nextSpace)) {
                previewStart = nextDot + 1;
                ellipsesBefore = false;
                break;
              }
              if (nextSpace < 0) {
                previewStart = 0;
                ellipsesBefore = false;
                break;
              }
              previewStart = nextSpace + 1;
            }
            for (var k = 0; k < 10; k++) {
              var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
              var nextDot = doc.content.indexOf('. ', previewEnd + 1);
              if ((nextDot >= 0) && (nextDot < nextSpace)) {
                previewEnd = nextDot;
                ellipsesAfter = false;
                break;
              }
              if (nextSpace < 0) {
                previewEnd = doc.content.length;
                ellipsesAfter = false;
                break;
              }
              previewEnd = nextSpace;
            }
            contentPositions.push({
              highlight: position,
              previewStart: previewStart, previewEnd: previewEnd,
              ellipsesBefore: ellipsesBefore, ellipsesAfter: ellipsesAfter
            });
          }
        }
      }

      if (titlePositions.length > 0) {
        titlePositions.sort(function(p1, p2){ return p1[0] - p2[0] });
        resultDocOrSection.innerHTML = '';
        addHighlightedText(resultDocOrSection, doc.title, 0, doc.title.length, titlePositions);
      }

      if (contentPositions.length > 0) {
        contentPositions.sort(function(p1, p2){ return p1.highlight[0] - p2.highlight[0] });
        var contentPosition = contentPositions[0];
        var previewPosition = {
          highlight: [contentPosition.highlight],
          previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
          ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
        };
        var previewPositions = [previewPosition];
        for (var j = 1; j < contentPositions.length; j++) {
          contentPosition = contentPositions[j];
          if (previewPosition.previewEnd < contentPosition.previewStart) {
            previewPosition = {
              highlight: [contentPosition.highlight],
              previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
              ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
            }
            previewPositions.push(previewPosition);
          } else {
            previewPosition.highlight.push(contentPosition.highlight);
            previewPosition.previewEnd = contentPosition.previewEnd;
            previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
          }
        }

        var resultPreviews = document.createElement('div');
        resultPreviews.classList.add('search-result-previews');
        resultLink.appendChild(resultPreviews);

        var content = doc.content;
        for (var j = 0; j < Math.min(previewPositions.length, 3); j++) {
          var position = previewPositions[j];

          var resultPreview = document.createElement('div');
          resultPreview.classList.add('search-result-preview');
          resultPreviews.appendChild(resultPreview);

          if (position.ellipsesBefore) {
            resultPreview.appendChild(document.createTextNode('... '));
          }
          addHighlightedText(resultPreview, content, position.previewStart, position.previewEnd, position.highlight);
          if (position.ellipsesAfter) {
            resultPreview.appendChild(document.createTextNode(' ...'));
          }
        }
      }
      var resultRelUrl = document.createElement('span');
      resultRelUrl.classList.add('search-result-rel-url');
      resultRelUrl.innerText = doc.relUrl;
      resultTitle.appendChild(resultRelUrl);
    }

    function addHighlightedText(parent, text, start, end, positions) {
      var index = start;
      for (var i in positions) {
        var position = positions[i];
        var span = document.createElement('span');
        span.innerHTML = text.substring(index, position[0]);
        parent.appendChild(span);
        index = position[0] + position[1];
        var highlight = document.createElement('span');
        highlight.classList.add('search-result-highlight');
        highlight.innerHTML = text.substring(position[0], index);
        parent.appendChild(highlight);
      }
      var span = document.createElement('span');
      span.innerHTML = text.substring(index, end);
      parent.appendChild(span);
    }
  }

  jtd.addEvent(searchInput, 'focus', function(){
    setTimeout(update, 0);
  });

  jtd.addEvent(searchInput, 'keyup', function(e){
    switch (e.keyCode) {
      case 27: // When esc key is pressed, hide the results and clear the field
        searchInput.value = '';
        break;
      case 38: // arrow up
      case 40: // arrow down
      case 13: // enter
        e.preventDefault();
        return;
    }
    update();
  });

  jtd.addEvent(searchInput, 'keydown', function(e){
    switch (e.keyCode) {
      case 38: // arrow up
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var previous = active.parentElement.previousSibling.querySelector('.search-result');
            previous.classList.add('active');
          }
        }
        return;
      case 40: // arrow down
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
          }
        } else {
          var next = document.querySelector('.search-result');
          if (next) {
            next.classList.add('active');
          }
        }
        return;
      case 13: // enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.click();
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.click();
          }
        }
        return;
    }
  });

  jtd.addEvent(document, 'click', function(e){
    if (e.target != searchInput) {
      hideSearch();
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
  initSearch();
});

})(window.jtd = window.jtd || {});

        

        

        
        

      </div>
    </div>

    
      

      <div class="search-overlay"></div>
    
  </div>
</body>
</html>

