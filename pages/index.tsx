import { useRef } from 'react';

function HomePage() {
  const emailRef = useRef<HTMLInputElement>();
  const feedbackRef = useRef<HTMLTextAreaElement>();

  const submitForm = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
  };
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor='email'>E-mail</label>
          <input type='email' id='email' ref={emailRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea id='feedback' rows={5} ref={feedbackRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
