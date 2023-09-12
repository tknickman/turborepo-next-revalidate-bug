export function getStaticProps() {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

export default function Page({ date }: { date: string }) {
  return <div>Test {date}</div>;
}
