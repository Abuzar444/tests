import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--dark-mode-bg-secondary-color);
    width: fit-content;
    height: fit-content;
    padding: 3rem 1.5rem;
    border-radius: 0.5rem;
    gap: 2rem;
  }

  .main-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .info-text {
    font-size: 0.8rem;
    color: var(--dark-mode-text-color);
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .cancel-btn {
    background: var(--dark-mode-bg-secondary-color);
    color: var(--primary-500);
    border: 1px solid var(--primary-500);
    transition: var(--transition);
  }

  .cancel-btn:hover {
    background: var(--primary-500);
    color: var(--dark-mode-text-color);
  }
`;

export default Wrapper;