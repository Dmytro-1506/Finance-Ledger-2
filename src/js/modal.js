(() => {
    let modalIsOpen = false;
    const refs = {
        openModalBtn1: document.querySelector("[data-modal-open1]"),
        openModalBtn2: document.querySelector("[data-modal-open2]"),
        openModalBtn3: document.querySelector("[data-modal-open3]"),
        openModalBtn4: document.querySelector("[data-modal-open4]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn1.addEventListener("click", openModal);
    refs.openModalBtn2.addEventListener("click", openModal);
    refs.openModalBtn3.addEventListener("click", openModal);
    refs.openModalBtn4.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);

    function handleEsc(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    function openModal() {
        if (!modalIsOpen) {
            modalIsOpen = true
            toggleModal();
            const backdrop = document.querySelector(".backdrop");

            backdrop.addEventListener("click", handleBackdrop);

            function handleBackdrop(event) {
                console.log(event.target);
                console.log(backdrop);
                if (event.target === backdrop) {
                    closeModal();
                }
            }

            document.addEventListener("keydown", handleEsc)
        }
    }

    function closeModal() {
        if (modalIsOpen) {
            modalIsOpen = false;
            toggleModal();
            document.removeEventListener("keydown", handleEsc);
        }
    }

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
