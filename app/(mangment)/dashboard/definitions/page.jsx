import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Definations() {
  return (
    <div className="flex items-center justify-center w-full mt-7">
      <Tabs defaultValue="colors" className="w-[350px]" dir="RTL">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">الالوان</TabsTrigger>
          <TabsTrigger value="icons">الايقونات</TabsTrigger>
          <TabsTrigger value="equations">المعادلات</TabsTrigger>
        </TabsList>
        <TabsContent value="colors">
          <Card>
            <CardHeader className="font-tajwal">
              <CardTitle> وصف واهمية الالوان المستخدمة</CardTitle>
              <CardDescription>
                بيان توضيحي يشرح الالوان المستخدمة .. فكل لون يرمز لوضعية معية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <p className="border-b border-black/40 pb-2">الوان الحقول</p>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-amber-700" />
                <p>حقل الزامي bg-amber-700</p>
              </div>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-gray-500" />
                <p>حقل اختياري bg-gray-500</p>
              </div>

              <p className="border-b border-black/40 pb-2">الوان الرصيد</p>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-green-500" />
                <p>مبالغ واجبة السداد من العميل bg-green-500</p>
              </div>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-orange-500" />
                <p>مبالغ واجبة السداد منك للعميل bg-orange-500</p>
              </div>
              <p className="border-b border-black/40 pb-2">الوان عامة</p>

              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-blue-500" />
                <p>معلومة bg-blue-500</p>
              </div>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-lime-500" />
                <p>يستخدم عند وحود عملية تعديل bg-lime-500</p>
              </div>
              <div className="flex items-center gap-4 font-tajwal font-bold text-lg">
                <div className="w-7 h-7 bg-red-600" />
                <p>يستخدم عند وحود عملية حذف bg-red-600</p>
              </div>

              
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="icons">
          <Card>
            <CardHeader>
              <CardTitle>icons</CardTitle>
              <CardDescription>
                {/* Change your password here. After saving, you'll be logged out. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
               
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="equations">
          <Card>
            <CardHeader>
              <CardTitle>equations</CardTitle>
              <CardDescription>
                {/* Change your password here. After saving, you'll be logged out. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
               
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Definations;
