import React, {useState} from 'react';
import {TestTable} from "./example1/TestTable";
import {Example2} from "./example2/Example2";

type Variant = {
    Component: React.FC,
    description: string,
    title: string
}
const TestExamplesNavigation = () => {
    const variants: Variant[] = [{
        Component: TestTable,
        description: '',
        title: 'variant 1',
    }, {
        Component: Example2,
        description: '',
        title: 'variant 2',
    }]

    const [variant, setVariant] = useState<Variant>(variants[1])

    return (

        <div>
            <div>
                {variants.map((variant) =>
                    <button onClick={() => {
                        setVariant(variant)
                    }}>
                        {variant.title}
                    </button>
                )}
            </div>
            <div>
                {/*<TestTable/>*/}
                <variant.Component/>
            </div>
        </div>
    );
};

export {TestExamplesNavigation};
