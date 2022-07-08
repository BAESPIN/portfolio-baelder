import React from "react";
import {branch, Builder, item, Panel, Workspace} from "build-ui";

export const MyBuilder = (children: React.ReactNode) => {
    const tree = branch(
        item({
            type: 'Canvas',
            props:{
                style:{
                    width: '100%',
                    height: '800px',
                    backgroundColor: 'white'
                }
            }
        })
    );

    const views = {

    };
    const panels = {

    }

    return (
        <Builder initialTree={tree}
                 initialTimeline={undefined}
                 initialVersion={undefined}
                 initialHistoryLimit={undefined}
                 initialBatchTime={undefined}
                 initialBatchTimeLimit={undefined}>
            <Workspace view = {views} />
            <Panel view={panels}/>
            {children}
        </Builder>
    );
};

export default MyBuilder;