import ReactModal from 'react-modal';
import React, { useState } from 'react';

function Button({ styles }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div>
  <button onClick={setIsOpen} type="button" className={`request-button py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none duration-700 ${styles}`}>
    Request Quote
  </button>
  <ReactModal
    style={{
      overlay: {
        zIndex: 100,
		opacity: 5,
      },
	  content: {
		background: 0,
	  }
    }}
    isOpen={isOpen}
    contentLabel="Example Modal"
    onRequestClose={() => setIsOpen(false)}>
      <div className="z-10">
      <section class="form-container">
	  <button className="closeButton" onClick={() => setIsOpen(false)}>X</button>
		<form action="https://formsubmit.co/jglover@premierlanddevelopment.com" method="POST">
			<h1 class="form-header">Request a Quote</h1>
			<div class="form">
				<div class="form-item form-item1">
					<label for="First Name">First Name</label>
					<input id="firstname" type="text" name="First Name"/>
				</div>
				
				<div class="form-item form-item1">
					<label for="Last Name">Last Name</label>
					<input for="lastname" type="text" name="Last Name"/>
				</div>
				
				<div class="form-item form-item2">
					<label for="Phone Number">Phone Number</label>
					<input id="phonenumber" type="tel"name="Phone Number"/>
				</div>

				<div class="form-item form-item2">
					<label for="Email">Email</label>
					<input id="email" type="email" name="Email"/>
				</div>

				<div class="form-item form-item3">
					<label for="Time Frame">Time Frame</label>
					<select name="Time Frame">
						<option value="week-1">1 week</option>
						<option value="week-2">2 weeks</option>
						<option value="week-3">3 weeks</option>
						<option value="month-1">1 month</option>
						<option value="month-3">3 months</option>
					</select>
				</div>

				<div class="form-item form-item3">
					<label for="Returning Customer">Returning Customer?</label>
					<select name="Returning Customer?">
						<option value="form-no">No</option>
						<option value="form-yes">Yes</option>
					</select>
				</div>
				
				<div class="textarea-div form-item4">
					<label for="Message">Job Description</label>
					<textarea id="message" type="text" name="Message" placeholder="What would you have me do?"></textarea>
				</div>
				<div class="btn-container">
					<input id="submit" class="btn btn-glow form-btn" type="submit" name="Submit" value="Request Quote"/>
				</div>
			</div>
		</form>
	</section>
      </div>
  </ReactModal>
  </div>
  );
}

export default Button;
