import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'

function StarterPage() {
    return (
        <DashboardLayout>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title">Blank page</h2>
                    <div>
                        <a href="#" className="btn btn-primary">Create new</a>
                    </div>
                </div>
                <div className="card mb-4">
                    <header className="card-header">
                        <h4>Card header</h4>
                    </header>
                    <div className="card-body">
                        <h5 className="card-title">Card content</h5>
                        <div className="mt-4">
                            <div className="text-muted font-size-14">
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam enim ad minima veniam quis</p>
                                <p className="mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt</p>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    )
}

export default StarterPage