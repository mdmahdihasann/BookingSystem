import Field from "@/components/Field";
import { Breadcrumb } from "antd";
import { Group } from "antd/es/radio";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3 mt-2">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: (
              <Link href="/" className="!text-blue-600">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link href="" className="!text-blue-600">
                Launch
              </Link>
            ),
          },
          {
            title: <span className="text-gray-400 text-sm">Booking</span>,
          },
        ]}
      />
      <div>
        <form className="flex flex-col gap-3">
          <Group className="groupBy">
            <Field label="Launch Name">
              <input className="input"
              />
            </Field>
          </Group>
        </form>
      </div>
    </div>
  );
};

export default page;
