"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import TableAdmin from "./TableAdmin";
import { useAdmin } from "./useAdmin";
import AdminModal from "./AdminModal";

export default function Admin() {
  const {
    form,
    open,
    options,
    formEdit,
    initialValues,
    deleteAdmin,
    onCancel,
    handleChange,
    handleCheckBox,
    newAdmin,
    editAdmin,
  } = useAdmin();

  console.log(open);
  return (
    <>
      <AdminModal
        form={form}
        handleChange={handleChange}
        handleCheckBox={handleCheckBox}
        open={open}
        initialValues={initialValues}
        options={options}
        setOpen={onCancel}
      />
      <AdminModal
        form={formEdit}
        handleChange={handleChange}
        handleCheckBox={handleCheckBox}
        open={open}
        options={options}
        setOpen={onCancel}
      />
      <div className="flex items-center justify-between">
        <label className="font-bold">Pengaturan Akun</label>
        <Button
          className="font-bold bg-brand"
          onClick={() => newAdmin()}
          size="sm"
        >
          Tambah Akun
        </Button>
      </div>
      <div className="flex flex-col w-full gap-2 p-4 mt-5 overflow-x-scroll bg-white rounded-md drop-shadow-md no-scrollbar">
        <TableAdmin onEdit={editAdmin} onDelete={deleteAdmin} />
      </div>
    </>
  );
}
