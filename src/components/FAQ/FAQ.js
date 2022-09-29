import React from 'react';

const FAQ = () => {
	return (
		<div className="py-5">
			<div className="text-center text-primary pb-2">
				<h1>FAQ</h1>
			</div>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button fw-bold"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							How does react work?
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							React uses a declarative paradigm that makes it easier to reason
							about your application and aims to be both efficient and flexible.
							It designs simple views for each state in your application, and
							React will efficiently update and render just the right component
							when your data changes.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed fw-bold"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							what is the difference between state and props in react?
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Props are used to pass data from one component to another. The
							state is a local data storage that is local to the component only
							and cannot be passed to other components.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingThree">
						<button
							class="accordion-button collapsed fw-bold"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							what is useEffect used for in react?
						</button>
					</h2>
					<div
						id="collapseThree"
						class="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							The useEffect Hook allows you to perform side effects in your
							components. Some examples of side effects are: fetching data,
							directly updating the DOM, and timers. useEffect accepts two
							arguments. The second argument is optional.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
