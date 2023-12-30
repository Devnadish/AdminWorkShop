import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


function Login() {
  return (
    <div>
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>هل انت متاكد?</AlertDialogTitle>
            <AlertDialogDescription>
              سيتم حذف الكرت ولا يمكن التراجع عن العملية
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex items-center gap-4">
            <AlertDialogAction onClick={() => handleDelete(id)}>
              استمر
            </AlertDialogAction>
            <AlertDialogCancel>الغاء</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Login
