import { DataTableSkeleton } from "@/components/shared/data-table-skeleton";
import PageHead from "@/components/shared/page-head";

export default function Dashboard() {
    return (
        <div>
            <PageHead title="Dashboard" />
            <DataTableSkeleton
                columnCount={6}
                rowCount={200}
            />
        </div>
    )
}