import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function DownloadCVButton() {
    return (
        <div className="flex space-x-4">
            <a href="../assets/Godswill_Erh_CV_25.pdf" download="Godswill_Erhunmwunse_CV.pdf">
                <Button variant="outline" className="flex items-center gap-2 rounded-xl hover:bg-slate-900">
                    <Download className="h-4 w-4" /> Download My CV
                </Button>
            </a>
        </div>
    )
}