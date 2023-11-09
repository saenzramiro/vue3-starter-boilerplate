<template>
	<div class="container mx-auto p-5 grid grid-cols-2 gap-4">
		<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
			<div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500"><BeakerIcon class="inline-flex h-6 w-6 text-blue-500" />Tree 1</p>
			</div>
			<div class="p-4 md:p-5">
				<tree-view :initial-model="tree1Data" :model-defaults="modelDefaults">
					<template #text="{ model }">
						<!-- The TreeViewNode's model is available, and built-in classes and overrides are available -->
						<!-- <em :title="model.treeNodeSpec.title" class="grtvn-self-text" :class="customClasses.treeViewNodeSelfText">
							{{ model[model.treeNodeSpec.labelProperty] }}
							{{ console.log(model) }}
						</em> -->
						<PlusIcon v-if="!model.treeNodeSpec.state.expanded" class="flex-shrink-0 w-4 h-4 inline-flex" />
						<MinusIcon v-else class="flex-shrink-0 w-4 h-4 inline-flex" />
						<span class="grtvn-self-text pl-2">{{ model.label }}</span>
					</template>
				</tree-view>
			</div>
		</div>

		<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
			<div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">Tree 2</p>
			</div>
			<div class="p-4 md:p-5">
				<tree-view :initial-model="tree2Data" :model-defaults="modelDefaults"></tree-view>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { TreeView } from '@grapoza/vue-tree';
import { BeakerIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/solid';
export default {
	components: {
		TreeView,
		BeakerIcon,
		PlusIcon,
		MinusIcon,
	},
	data() {
		return {
			modelDefaults: {
				expanderTitle: 'Expand this node',
				draggable: true,
				allowDrop: true,
				state: {
					expanded: false,
				},
				customizations: {
					classes: {
						// treeViewNodeSelf: 'inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white',
						treeViewNodeSelfText: 'marker:text-blue-600 list-disc  text-sm text-gray-600 dark:text-gray-400',
						treeViewNodeSelfExpander: 'action-button',
						treeViewNodeSelfExpandedIndicator: 'fas fa-chevron-right',
						treeViewNodeSelfAction: 'action-button',
						treeViewNodeSelfAddChildIcon: 'fas fa-plus-circle',
						treeViewNodeSelfDeleteIcon: 'fas fa-minus-circle',
					},
				},
			},
			tree1Data: [
				{
					id: 'dragdrop1-node1',
					label: 'Node One',
					children: [],
					treeNodeSpec: {
						addChildCallback: function () {
							return Promise.resolve({ id: '' + Math.random(), label: 'Added' });
						},
					},
				},
				{
					id: 'dragdrop1-node2',
					label: 'Node Two',
					children: [
						{
							id: 'dragdrop1-subnode1',
							label: 'Subnode One',
							children: [],
						},
						{
							id: 'dragdrop1-subnode2',
							label: 'Subnode Two',
							children: [
								{
									id: 'dragdrop1-subsubnode1',
									label: 'Sub-Subnode 1',
									children: [],
								},
								{
									id: 'dragdrop1-subsubnode2',
									label: 'Sub-Subnode 2',
									children: [],
								},
							],
						},
					],
				},
			],
			tree2Data: [
				{
					id: 'dragdrop2-node1',
					label: 'Node One',
					children: [],
					treeNodeSpec: {
						addChildCallback: function () {
							return Promise.resolve({ id: '' + Math.random(), label: 'Added' });
						},
					},
				},
				{
					id: 'dragdrop2-node2',
					label: 'Node Two',
					children: [
						{
							id: 'dragdrop2-subnode1',
							label: 'Subnode One',
							children: [],
						},
						{
							id: 'dragdrop2-subnode2',
							label: 'Subnode Two',
							children: [
								{
									id: 'dragdrop2-subsubnode1',
									label: 'Sub-Subnode 1',
									children: [],
								},
								{
									id: 'dragdrop2-subsubnode2',
									label: 'Sub-Subnode 2',
									children: [],
								},
							],
						},
					],
				},
			],
		};
	},
};
</script>
<style lang="scss">
// @import '@grapoza/vue-tree/css';
.grtv {
	// @apply flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7];
	// @apply max-w-xs flex flex-col;
	.grtvn-self {
		@apply w-full py-3 px-4 justify-start items-start text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
		// .grtvn-self-expanded-indicator {
		// }
		.grtvn-self-spacer {
			@apply min-w-0;
		}
	}
	.grtvn-children-wrapper {
		@apply ml-5 pl-5 border-l-2 border-gray-200 dark:border-gray-700;
	}
}
</style>
