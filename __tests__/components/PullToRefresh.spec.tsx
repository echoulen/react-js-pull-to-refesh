import * as React from "react";
import * as renderer from "react-test-renderer";
import {PullToRefresh} from "../../src/";

describe("PullToRefresh spec", () => {
    it("App shows PullToRefresh", () => {
        const element = renderer
            .create((
                <PullToRefresh
                    onRefresh={null}
                    pullDownContent={<div>Pull Down</div>}
                    releaseContent={<div>Release to refresh</div>}
                    refreshContent={<div>Refreshing</div>}
                    pullDownThreshold={200}
                    triggerHeight={100}
                    backgroundColor="white"
                    startInvisible={false}
                >
                    <div>Test</div>
                </PullToRefresh>
            ))
                .toJSON();
        expect(element).toMatchSnapshot();
    });
});
