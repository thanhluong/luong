import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Doan Nguyen Thanh Luong" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

export default function Index() {
  return (
    <>
      <iframe title={"resume"} src="luongd_resume_1.pdf" width="100%" height="1024" />
    </>
  );
}