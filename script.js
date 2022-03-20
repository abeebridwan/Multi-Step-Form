const multiStep = document.querySelector("[data-multi-step]")
const formStep = [...multiStep.querySelectorAll("[data-step]")]

let currentStep = formStep.findIndex(step => {
  return step.classList.contains("active")
})

/* show the first step */
if (currentStep < 0) {
  currentStep = 0
  showCurrentStep()
}

/* when next and previous buttons are clicked */
multiStep.addEventListener("click", e => {
  let incrementor
  if (e.target.matches("[data-next]")) {
    incrementor = 1
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1
  }

  if (incrementor == null) {
    return
  }

  const inputs = [...formStep[currentStep].querySelectorAll("input")]
  const allValid = inputs.every(input => input.reportValidity())
  if (allValid) {
    currentStep += incrementor
    showCurrentStep()
  }

})

/* show the current step */
function showCurrentStep() {
  formStep.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep)
  })
}