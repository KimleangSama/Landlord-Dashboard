import { DataTableSkeleton } from "@/components/shared/data-table-skeleton";
import PageHead from "@/components/shared/page-head";

export default function Property() {
    return (
        <div>
            <PageHead title="Property" />
            <DataTableSkeleton
                columnCount={6}
                rowCount={20}
            />
        </div>
    )
}