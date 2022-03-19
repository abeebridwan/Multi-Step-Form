let stepIndex = 1
showStep(stepIndex)

let next = document.querySelector("[data-next]")
let previous = document.querySelector("[data-previous]")

function plusStep(n) {
  showStep(stepIndex += n)
}

function showStep() {
  let steps = document.querySelectorAll("[data-step]")
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active")
  }
  steps[stepIndex - 1].classList.toggle("active")
}