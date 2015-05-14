<div id="contactModal" class="modal">
    <form name="emailUs" action="includes/contact-process.php" method="POST">
<div class="modal-content">
<h4>Contact Us</h4>
<p>Use the form or information below to contact us!</p>

<div class="input-field col s4">
    <i class="mdi-action-account-circle prefix"></i>
  <input id="name" name="name" type="text">
  <label for="name">Name</label>
</div>

 <div class="input-field col s6">
  <i class="mdi-communication-phone prefix"></i>
  <input id="icon_telephone" name="tele" type="tel" >
  <label for="icon_telephone">Telephone</label>
</div>
<div class="input-field col s12">
  <i class="mdi-communication-email prefix"></i>
  <input id="email" name="email" type="email" >
  <label for="email">Email</label>
</div>
<div class="input-field col s12">
    <i class="mdi-communication-forum prefix"></i>
  <textarea id="textarea1" name="comments" class="materialize-textarea"></textarea>
  <label for="textarea1">Enquiry</label>
</div>

</div>
<div class="modal-footer white-text">
<input type="submit" id="submit" value="Send" class="blue modal-action modal-close waves-effect waves-light btn-flat white-text"/>
<a href="#!" class="blue modal-action modal-close waves-effect waves-light btn-flat white-text">Cancel</a>
</div>
</form>
</div>
