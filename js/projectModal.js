document.addEventListener("DOMContentLoaded", () => {
  const openProject1ModalBtns = document.querySelectorAll(
    ".open-project1-modal"
  );
  const openProject4ModalBtns = document.querySelectorAll(
    ".open-project4-modal"
  );
  const openProject6ModalBtns = document.querySelectorAll(
    ".open-project6-modal"
  );
  const openProject9ModalBtns = document.querySelectorAll(
    ".open-project9-modal"
  );
  const openProject10ModalBtns = document.querySelectorAll(
    ".open-project10-modal"
  );
  const closeModalBtn = document.querySelector(".close-modal");
  const projectModal = document.querySelector(".project-modal");
  const project1Modal = document.querySelector(".project1-modal");
  const project4Modal = document.querySelector(".project4-modal");
  const project6Modal = document.querySelector(".project6-modal");
  const project9Modal = document.querySelector(".project9-modal");
  const project10Modal = document.querySelector(".project10-modal");

  // Open modal
  openProject1ModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectModal.classList.remove("d-none");
      project1Modal.classList.remove("d-none");
    });
  });

  openProject4ModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectModal.classList.remove("d-none");
      project4Modal.classList.remove("d-none");
    });
  });

  openProject6ModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectModal.classList.remove("d-none");
      project6Modal.classList.remove("d-none");
    });
  });

  openProject9ModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectModal.classList.remove("d-none");
      project9Modal.classList.remove("d-none");
    });
  });

  openProject10ModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectModal.classList.remove("d-none");
      project10Modal.classList.remove("d-none");
    });
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    projectModal.classList.add("d-none");
    project1Modal.classList.add("d-none");
    project4Modal.classList.add("d-none");
    project6Modal.classList.add("d-none");
    project9Modal.classList.add("d-none");
    project10Modal.classList.add("d-none");
  });
});
