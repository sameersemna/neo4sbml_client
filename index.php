<?php 

?>
<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/i/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="js/vendor/popoto-0.0.a5/css/popoto.min.css">

</head>
<body>
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
n
  <!-- Add your site or application content here -->
  <div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <a class="brand" href="#">Neo4SBML Client</a>
                                        <div class="nav-collapse">
                                          <ul class="nav">
                                            <li class="active"><a href="#">These</a></li>
                                            <li><a href="#about">Don't</a></li>
                                            <li><a href="#contact">Do</a></li>
                                            <li><a href="#anything">Anything</a></li>
                                            <li class="vertical-divide"></li>
                                            <li><a href="#...">...</a></li>
                                            <li><a href="#yet">Yet</a></li>
                                          </ul>
                                        </div><!--/.nav-collapse -->
      </div>
    </div>
    <a href="https://github.com/zmaril/d3.js-boilerplate/tree/bootstrap"><img style="display:none;position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
  </div>

  <section id="main">
    <div class="fluid-container">
      <div class="fluid-row">
        <div class="offset1 span4">
          <h1>Bootstrap.</h1>
          <p>
            
          </p>
        </div>
        <div class="span8">  
          <div id="graphic" style="display:none;"></div>
          <div id="graph"></div>
          
          <!-- By default the graph is generated in the HTML element with
            ID "popoto-graph" -->
			<div id="popoto-graph" class="ppt-div-graph" style="height:500px;">
				<!-- Graph is generated here -->
			</div>
			
			<!-- By default the query viewer is generated on the HTML element with
            ID "popoto-query" If needed this id can be modified with
            property "popoto.query.containerId" -->

			<div id="popoto-query" class="ppt-container-query">
				<!-- Query viewer is generated here -->
			</div>
			
			<div id="popoto-cypher" class="ppt-container-query">
				<!-- Query viewer is generated here -->
			</div>
			
			<div id="popoto-results" class="ppt-container-query">
				<!-- Query viewer is generated here -->
			</div>
    
        </div>
      </div>  
    </div>
  </section>
  <!-- JavaScript at the bottom for fast page loading: http://developer.yahoo.com/performance/rules.html#js_bottom -->
  
  

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.7.2.min.js"><\/script>')</script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/d3.min.js"></script>
    <script src="js/vendor/underscore.min.js"></script>
    <script src="js/vendor/popoto-0.0.a5/js/popoto.min.js"></script>
    
    <script src="js/index.js"></script>
    <!--<script src="js/work.js"></script>-->
    <script>
    popoto.start("Species");
    </script>
</body>
</html>
