/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D8bY6iwIKBV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  return (
    <div className="w-full h-full flex flex-col gap-6 p-6 bg-gray-900 text-white">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <img
            alt="Bank Logo"
            className="rounded-full"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          /> */}
          <div>
            <h1 className="text-2xl font-bold text-green-500">Acme Bank</h1>
            <p className="text-sm text-gray-400">Banking made easy</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold text-green-500">John Doe</h2>
          <p className="text-sm text-gray-400">Account No: 1234567890</p>
        </div>
      </header>
      <ScrollArea className="flex-1">
        <Table className="w-full">
          <TableHeader className="bg-green-500 text-white">
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Debit Amount</TableHead>
              <TableHead>Credit Amount</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>01/01/2024</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$5000.00</TableCell>
              <TableCell>$5000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>02/01/2024</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>$1000.00</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$4000.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>03/01/2024</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>$200.00</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$3800.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>04/01/2024</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$5000.00</TableCell>
              <TableCell>$8800.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>05/01/2024</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>$1000.00</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$7800.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>06/01/2024</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>$200.00</TableCell>
              <TableCell>-</TableCell>
              <TableCell>$7600.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}

