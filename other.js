let stepIndex = 1
let steps = document.querySelectorAll("[data-step]")
let next = document.querySelector("[data-next]")
let previous = document.querySelector("[data-previous]")
showStep(stepIndex)


function plusStep(n, prevCheck = null) {
  /* clause for previous button implementation for next button */
  const inputs = [...steps[stepIndex - 1].querySelectorAll("input")]
  const allValid = inputs.every(input => input.reportValidity())
  if (allValid) {
    showStep(stepIndex += n)
  } else if (prevCheck) {
    showStep(stepIndex += n)
  } else {
    return
  }
}

function showStep() {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active")
  }
  steps[stepIndex - 1].classList.add("active")
}