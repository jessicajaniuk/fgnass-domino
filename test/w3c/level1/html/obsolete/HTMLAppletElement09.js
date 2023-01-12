/*
Copyright Â© 2001-2004 World Wide Web Consortium, 
(Massachusetts Institute of Technology, European Research Consortium 
for Informatics and Mathematics, Keio University). All 
Rights Reserved. This work is distributed under the W3CÂ® Software License [1] in the 
hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 

[1] http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231
*/

/**
 *  Gets URI that identifies the test.
 *  @return uri identifier of test
 */
function getTargetURI() {
  return 'http://www.w3.org/2001/DOM-Test-Suite/level1/html/HTMLAppletElement09';
}

var docsLoaded = -1000000;
var builder = null;

//
//   This function is called by the testing framework before
//      running the test suite.
//
//   If there are no configuration exceptions, asynchronous
//        document loading is started.  Otherwise, the status
//        is set to complete and the exception is immediately
//        raised when entering the body of the test.
//
function setUpPage() {
  setUpPageStatus = 'running';
  try {
    //
    //   creates test document builder, may throw exception
    //
    builder = createConfiguredBuilder();

    docsLoaded = 0;

    var docRef = null;
    if (typeof this.doc != 'undefined') {
      docRef = this.doc;
    }
    docsLoaded += preload(docRef, 'doc', 'applet');

    if (docsLoaded == 1) {
      setUpPageStatus = 'complete';
    }
  } catch (ex) {
    catchInitializationError(builder, ex);
    setUpPageStatus = 'complete';
  }
}

//
//   This method is called on the completion of
//      each asychronous load started in setUpTests.
//
//   When every synchronous loaded document has completed,
//      the page status is changed which allows the
//      body of the test to be executed.
function loadComplete() {
  if (++docsLoaded == 1) {
    setUpPageStatus = 'complete';
  }
}

/**
* 
    The vspace attribute specifies the vertical space above and below
    this image, applet or object.  Retrieve the vspace attribute and examine its value.  
    
    This test is incompatible with L2 HTML implementations due to a change in the type of the attribute.
    

* @author NIST
* @author Mary Brady
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-22637173
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=504
*/
function HTMLAppletElement09() {
  var success;
  if (checkInitialization(builder, 'HTMLAppletElement09') != null) return;
  var nodeList;
  var testNode;
  var vvspace;
  var doc;
  var domImpl;
  var hasHTML2;

  var docRef = null;
  if (typeof this.doc != 'undefined') {
    docRef = this.doc;
  }
  doc = load(docRef, 'doc', 'applet');
  domImpl = doc.implementation;
  hasHTML2 = domImpl.hasFeature('HTML', '2.0');

  if (!hasHTML2) {
    nodeList = doc.getElementsByTagName('applet');
    assertSize('Asize', 1, nodeList);
    testNode = nodeList.item(0);
    vvspace = testNode.vspace;

    assertEquals('vspaceLink', '0', vvspace);
  }
}

function runTest() {
  HTMLAppletElement09();
}
