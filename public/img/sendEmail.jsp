<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Plant Microbe Interactions</title>
	<link href="stylesheets/common.css" rel="stylesheet" type="text/css" />
	<link href="stylesheets/calendar.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="script/script.js" > </script>
	<script type="text/javascript" src="script/calendar.js" > </script>
	
	

	<style>
	<!--
	ul.twocol { width: 400px; }
	li.colList { float: left; width: 180px; margin: 0px 20px 0px 0px; padding: 0px; }
	li.colList2 { float: left; width: 250px; margin: 0px 20px 0px 0px; padding: 0px; }
	// -->
	</style>
	
	<script type="text/javascript">
    	
    	function checkValuesAndPost() {
    	
    		if ( notCheckedSilent(document.sendForm.users, 'Please select/add email id to send') == false ) {
    			if (validateEmail( 'sendForm', 'email') == false  ) {
    				alert( 'Please select/add email to send' );
    				return false;
    			}
    		}    		
    		
    		document.sendForm.submit();    
    	}
    </script>
    
</head>


	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Plant Microbe Interactions</title>
	<link href="stylesheets/common.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="script/script.js" > </script>
	
    <script type="text/javascript">
    
        function checkValuesAndPost() {
			
            if ( notEmpty(document.getElementById('username'), 'Username cannot be empty, Please enter a proper username.') == false )
                return false;

            if ( notEmpty(document.getElementById('password'), 'Password cannot be empty, Please enter a proper password.') == false )
                return false;
               
            document.accessForm.submit();         
        }   

		function searchKeyPress(e)
		{
			if (window.event) { e = window.event; }
			if (e.keyCode == 13)
			{
				document.getElementById('loginBtn').click();
			}
		}

    </script>


</head>

<body>
	<!-- Start Header -->
		<!-- Start Header -->
	<div id="header">
		<div class="container">
			<a href="index.jsp" title="PMI"><img style="margin-bottom:30px;" src="images/logo_50.png" alt="Image:Plant Microbe Interactions" /><span></span></a>
			<hr />
			<!-- top navigation -->
			<ul id="navigation">
				<li class="active"><a href="index.jsp" title="Home">Home</a></li>
				
				
				<li><a href="team.jsp" title="Team">Team</a></li>
				<li><a href="extnPublication.jsp" title="Publications">Publications</a></li>
				<li><a href="extnTools.jsp" title="Team">Tools</a></li>
				<li><a href="internal.jsp" title="Internal">Internal</a> </li>
				<li><a href="internal.jsp" title="Internal"><img src="images/lock3.png" alt="Image:PMI Internal" /></a></li>
				
			</ul>
			<hr />
			
			<div id="banner">
				<div id="bannerOld" style="font-size:1.8em;">Plant-Microbe Interfaces</div><br/>Understanding the dynamic interface that exists between plants, microbes and their environment
			</div>
			<hr />
		</div>
	</div>

	
	<!-- Start Main Content -->
	<div id="main" class="container">
		<span style="color:#4d5337; "><a href="index.jsp">Home</a> &nbsp;&nbsp;<img src="images/arrow.gif" />&nbsp;&nbsp; PMI Internal Login <br/></span>
		<br/>
		<!-- main content area -->
		<div id="center" style="width:100%;">
			<div class="article_wrapper">
				<center>
					
										
				</center>
				<h2>PMI Internal Login</h2>
				
				<div class="rightbox_wrapper" style="width:45%;float:right; margin:0 20px 20px 20px;">
					<div class="rightbox">
						<!-- img src="images/documentsImg.png" alt="Image:product" class="product_image" style="width:20%;height:20%;"/ -->
						<div class="product_wrapper">
							<table style="margin:0px 10px 0px 0px; width:420px; padding: 30px;" cellspacing="12" cellpadding="15">
			                	<tr style="margin:0px; padding:0px;">
			                		<td style="padding-left:0px;"><img src="images/login.png" /></td>
			                    	<td  style="margin:0px; " valign="center">
			                    		<h2 class="normalHeader" style="vertical-align:middle;">PMI Team Login</h2>
			                    	</td>
			                	</tr> 
			                	<form name="accessForm" action="authenticate.jsp" method="post">
									<tr><td style="margin-left:5px; padding-left:5px; font-size:14px;">Username: </td><td style="padding-left:20px;padding-top:10px;"><input id="username" type="text" name="username" 
											onkeypress="searchKeyPress(event);" /></td></tr>
									<tr><td style="margin-left:5px; padding-left:5px; font-size:14px;">Password: </td><td style="padding-left:20px;padding-top:10px;"><input id="password" type="password" name="password" 
											onkeypress="searchKeyPress(event);" /> </td></tr>
			                    <tr><td colspan=2 align="center" style="padding-top:20px;">
										
			                    	<input type="button" id="loginBtn" src="images/btn_login.gif" value="Login" alt="Submit" onClick="checkValuesAndPost();"></td></tr>
			                    </form>
			                	
			                </table>
						</div>
					</div>
				</div>
				
                <p style="padding-right:20px; text-align:justify;">The information contained here is exclusively for the internal use of authorized Plant-Microbe Interfaces team and collaborators. You need a Oak Ridge National 
                 Laboratory access privileges to access this website. Please consult <a href="http://www.ornl.gov/xcams/xcamsfaq.htm">http://www.ornl.gov/xcams/xcamsfaq.htm</a> to request ORNL XCAMS privileges.
                <div style="clear:both;"></div>

				
				<div class="rightbox_wrapper" style="width:96%;margin-top:30px; ">
					<div class="rightbox">
						<!-- img src="images/documentsImg.png" alt="Image:product" class="product_image" style="width:20%;height:20%;"/ -->
						<div class="product_wrapper">
							<h4>ORNL SECURITY NOTICE</h4>
							<p style="text-align:justify;"><a href="locate.jsp"><img src="images/securityNotice.png" style="float:left; padding:5px 10px 0 10px;"/></a>This web site is part of a Federal computer system used to accomplish Federal functions. The Department of Energy monitors this web site for security purposes to ensure it remains available to all users and to protect information in the system. By accessing this web site, you are expressly consenting to these monitoring activities. Unauthorized attempts to defeat or circumvent security features, to use the system for other than intended purposes, to deny service to authorized users, to access, obtain, alter, damage, or destroy information, or otherwise to interfere with the system or its operation is prohibited. Evidence of such acts may be disclosed to law enforcement authorities and result in criminal prosecution under the Computer Fraud and Abuse Act of 1986 and the National Information Infrastructure Protection Act of 1996 (Pub. L. 104-294), (18 U.S.C. 1030), or other applicable criminal laws.</p>
						</div>
					</div>
				</div>


			</div>
			<hr />
		</div>
	</div>
	
	<!-- Start Bottom Information -->
		<!-- Start Bottom Information -->
	<div id="bottominfo">
		<div class="container">
			<!-- bottom left information -->
			<div class="bottomcolumn">
				<h3>PMI Resources </h3>
				<p>Follow these links for more related portal resources</p>
				<ul class="borderedlist iconlist">
					<li><a href="#" title="Team">PMI Team</a></li>
					<li><a href="#" title="Tools">Project Tools</a></li>
					<li><a href="http://www.ornl.gov" title="ORNL" target='_blank'>ORNL</a></li>
				</ul>
			</div>
			<!-- bottom center information -->
			<div class="bottomcolumn">
				<h3>PMI Upcoming Events</h3>
				<p>List of PMI related upcoming events (Meetings, Conferences etc.)</p>
				<ul class="borderedlist iconlist">
					<li><