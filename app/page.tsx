import Image from "next/image";

export default function Home() {
  return (
    <main className="mainContainer">
      <div className="w-full max-w-full text-foreground pt-16">
        <h4 className="mb-14">Lorem.<span className="text-primary">ipsum</span></h4>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Lorem ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet. Ut odit odio et soluta laborum et iste sint cum aliquam vero sit libero harum.</p>
        </div>
      </div>
    </main>
  );
}
