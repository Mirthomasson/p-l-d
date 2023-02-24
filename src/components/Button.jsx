import ReactModal from 'react-modal';
import React, { useState } from 'react';

function Button({ styles }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div>
  <button onClick={setIsOpen} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
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
		<form class="">
			<h1 class="form-header">Request a Quote</h1>
			<div class="form">
				<div class="form-item form-item1">
					<label for="firstname">First Name</label>
					<input id="firstname" type="text" name="firstname"/>
				</div>
				
				<div class="form-item form-item1">
					<label for="lastname">Last Name</label>
					<input for="lastname" type="text" name="lastname"/>
				</div>
				
				<div class="form-item form-item2">
					<label for="phonenumber">Phone Number</label>
					<input id="phonenumber" type="tel"name="phonenumber"/>
				</div>

				<div class="form-item form-item2">
					<label for="email">Email</label>
					<input id="email" type="email" name="email"/>
				</div>

				<div class="form-item form-item3">
					<label for="time frame">Time Frame</label>
					<select name="time frame">
						<option value="week-1">1 week</option>
						<option value="week-2">2 weeks</option>
						<option value="week-3">3 weeks</option>
						<option value="month-1">1 month</option>
						<option value="month-3">3 months</option>
					</select>
				</div>

				<div class="form-item form-item3">
					<label for="has website">Returning Customer?</label>
					<select name="has website">
						<option value="form-no">No</option>
						<option value="form-yes">Yes</option>
					</select>
				</div>
				
				<div class="textarea-div form-item4">
					<label for="message">Job Description</label>
					<textarea id="message" type="text" name="message" placeholder="What would you have me do?"></textarea>
				</div>
				<div class="btn-container">
					<input id="submit" class="btn btn-glow form-btn" type="submit" name="submit" value="Request Quote"/>
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
