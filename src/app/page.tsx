const getSecret = async () => {
  return 'MY SECRET KEY NO ONE IN THE UI SHOULD SEE IT';
};

export default async function ExamplePage() {
  const secret = await getSecret();

  const doSomethingSecret = async () => {
    'use server';

    console.log('we are doing something secret here', secret);
  };

  return (
    <main>
      <h1>Example</h1>
      <form action={doSomethingSecret}>
        <input name='name' />
        <button type='submit'>do something secret</button>
      </form>
    </main>
  );
}
