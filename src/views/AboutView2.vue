<template>
	<div class="container mx-auto p-5 grid grid-cols-2 gap-4">
		<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
			<div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500"><BeakerIcon class="inline-flex h-6 w-6 text-blue-500" />Tree 1</p>
			</div>
			<div class="p-4 md:p-5">
				<draggable class="list-group" :list="list1" v-bind="dragOptions" @change="log" itemKey="name">
					<template #item="{ element }">
						<div
							class="w-full py-3 px-4 justify-start items-start text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							{{ element.name }}
						</div>
					</template>
				</draggable>
			</div>
		</div>

		<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
			<div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">Tree 2</p>
			</div>
			<div class="p-4 md:p-5">
				<draggable class="list-group" :list="list2" v-bind="dragOptions2" @change="log" itemKey="name">
					<template #item="{ element }">
						<div
							class="w-full py-3 px-4 justify-start items-start text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							{{ element.name }}
						</div>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import draggable from 'vuedraggable';
import { BeakerIcon } from '@heroicons/vue/24/solid';
export default {
	components: {
		BeakerIcon,
		draggable,
	},
	data() {
		return {
			list1: [
				{ name: 'John', id: 1 },
				{ name: 'Joao', id: 2 },
				{ name: 'Jean', id: 3 },
				{ name: 'Gerard', id: 4 },
			],
			list2: [
				{ name: 'Juan', id: 5 },
				{ name: 'Edgard', id: 6 },
				{ name: 'Johnson', id: 7 },
			],
		};
	},
	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: 'people',
				disabled: false,
				ghostClass: 'ghost',
			};
		},
		dragOptions2() {
			return {
				animation: 200,
				group: 'people',
				disabled: false,
				ghostClass: 'ghost',
			};
		},
	},
	methods: {
		add: function () {
			// this.list.push({ name: 'Juan' });
		},
		replace: function () {
			// this.list = [{ name: 'Edgard' }];
		},
		clone: function (el) {
			return {
				name: el.name + ' cloned',
			};
		},
		log: function (evt) {
			window.console.log(evt);
		},
	},
};
</script>
<style lang="scss"></style>
