const multiStep = document.querySelector("[data-multi-step]")
const formStep = [...multiStep.querySelectorAll("[data-step]")]

let currentStep = formStep.findIndex(step => {
  return step.classList.contains("active")
})

if (currentStep < 0) {
  currentStep = 0
  showCurrentStep()
}

multiStep.addEventListener("click", e => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1
  } else {
    return
  }
  showCurrentStep()
})

function showCurrentStep() {
  formStep.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep)
  })
}